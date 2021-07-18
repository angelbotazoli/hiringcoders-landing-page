import React, { useState } from 'react'
import * as S from './style'

function Home() {
    const [email, setEmail] = useState('')
    const users = []

    function searchZipCode() {
        users.push(email)

        if (localStorage.getItem('users') === null) {
            localStorage.setItem('users', JSON.stringify([users]))
        } else {
            localStorage.setItem('users', JSON.stringify([
                ...JSON.parse(localStorage.getItem('users')), users])
            );
        }
        setEmail(email)
    }

    return (
        <S.Container>
            <S.Content>
                <S.P>CADASTRE-SE </S.P>
                <S.Input type="text" placeholder="Insira seu e-mail" value={email} onChange={element => setEmail(element.target.value)} />
                <S.Button type="submit" onClick={searchZipCode}>Enviar</S.Button>
            </S.Content>
        </S.Container>
    )
}

export default Home;