import React, { useEffect, useRef, useState } from "react";
import { fromEvent, EMPTY } from "rxjs";
import { map, debounceTime, distinctUntilChanged, switchMap, tap, catchError, filter } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { Grid, Typography, Input } from "@material-ui/core";

export const GitHubUser =  () => {
    const url = 'https://api.github.com/search/users?q=';
    const inputRef = useRef();
    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        const stream$ = fromEvent(inputRef.current, 'input')
            .pipe(
                map(e => e.target.value),
                debounceTime(1000),
                distinctUntilChanged(),
                tap(() => setResult([])),
                filter(v => v.trim()),
                switchMap(v => ajax.getJSON(url + v).pipe(
                    catchError(err => EMPTY)
                )),
                map(response => response.items),
            );

        stream$.subscribe(value => {
            setResult(value)
        });
        return () => stream$.unsubscribe();
    }, []);

    return (
        <>
            <Grid container alignItems="center" direction="column">
                <Typography variant="h4">Введите имя пользователя</Typography>
                <Input ref={inputRef} type="text" placeholder="Имя пользователя" value={value} onChange={handleChange}/>
            </Grid>
            <Grid>
                {result.length ? result.map((elem, index) => (
                    <div key={index}>
                        <img height={100} width={100} src={elem.avatar_url}/>
                        <p>Login: {elem.login}</p>
                    </div>
                )) :null}
            </Grid>
        </>
    );
};
