import style from 'styled-components'

export const Header = style.div`
  background: black;
  padding: .5rem .5rem;
  text-align: center;
  border: 1px solid red;
  display: flex;
`

export const Button = style.button`
  font-family: sans-serif;
  border: 0;
  border-radius: 1rem;
  padding: .7rem;
  margin: .5rem;
  background-color: red;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`

export const List = style.div`
  width: 50%;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
`