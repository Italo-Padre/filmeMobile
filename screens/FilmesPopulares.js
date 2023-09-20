import React, { useEffect, useState } from 'react'
import ApiFilmes from '../services/ApiFilmes'
import { Text } from 'react-native-paper'

const FilmesPopulares = ({navigation}) => {

    const [filmes,setFilmes] = useState([])

    useEffect(() => {
        ApiFilmes.get('movie/popular').then(resultado => {
            setFilmes(resultado.data.results)
        })
    }, [])

  return (
    <>
        {filmes.map(item=>(
            <Text key={item.id} onPress={() => navigation.push('Filmes-Detalhes', { id: item.id })}>{item.title}</Text>
        ))}
    </>
  )
}

export default FilmesPopulares