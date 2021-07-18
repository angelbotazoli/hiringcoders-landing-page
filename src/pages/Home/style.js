import style from 'styled-components'

export const Container = style.div`
  max-height:150px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  height:100vh;
  width: 100vw;
  height: 45vh;
  background: rgb(15,15,15);
`

export const Content = style.div`
  max-height:400px;
  max-width: 500px;
  display: flex;
  flex-direction: inline-flex;
  align-items: center;
  box-shadow: 0px 0px 50px 25px #fff;
  border-radius: 5px;
  background-color: white;
`

export const P = style.label`
  font-family: sans-serif;
  color: red;
  font-weight: 700;
  padding: .5rem;
  margin: .5rem;
  text-align: center;
`

export const Input = style.input`
  border: 1px solid #ddd;
  border-radius: .5rem;
  padding: .5rem;
  margin: .5rem;
  text-align: center;
  font-family: sans-serif;

`

export const Button = style.button`
  border: 0;
  border-radius: 1rem;
  padding: .7rem;
  margin: .5rem;
  border: 0;
  background-color: red;
  color: #fff;
  font-weight: 700;
  font-family: sans-serif;
  cursor: pointer;
`

export const Span = style.span`
  display: block;
  font-size: .8rem;
  color: red;
  font-weight: 700;
  margin: .6rem;
`