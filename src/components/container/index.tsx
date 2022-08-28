import { Container, ContainerInput, Information } from "./style";
import {FiSearch } from 'react-icons/fi';
import { api } from "../../services/api";
import React, { useState } from "react";



type Address = {
    cep: number;
    bairro:string;
    uf:string;
    logradouro: string;
    localidade: string;
  }
export function Cep(this: any){

    const[input, setInput] = useState('');
    const[cep, setCep] = useState<Address>();

    async function handleSearch(){
        if(input == ''){
            alert("Digite o CEP");
            return;
        }
        try{
            
            const response = await api.get(`${input}/json`);
            setCep(response.data);
            setInput("");
            
        }catch{
            alert("ops Erro");
            setInput("");
        }
    }
    
    return(
        
        <Container>
            <h1>Buscador de CEP</h1>
            <ContainerInput>
            <input
            type="text"
            
            placeholder="digite aqui..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={handleSearch}><FiSearch size={18}/></button>
            </ContainerInput>
            
            {cep && (
            <Information>
                <h2>CEP: {cep?.cep}</h2>
                <span>Logradouro: {cep?.logradouro}</span>
                <span>Bairro: {cep?.bairro}</span>
                <span>{cep?.localidade}-{cep?.uf}</span>
            </Information>
            )}
        </Container>
    )
}
