import React from 'react'
import * as S from './style'
import { Link } from 'react-scroll'

const Header = () => (
    <>
        < S.Header className="app-header" >
            <S.List>
                <Link to="products" spy={true} smooth={true}><S.Button type="submit" >PRODUTOS</S.Button></Link>

                <Link to="footer" spy={true} smooth={true}><S.Button type="submit">CONTATO</S.Button></Link>
            </S.List>
        </S.Header >
    </>
)

export default Header;