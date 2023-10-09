import React, { useEffect, useState } from 'react'
import ApiFilmes from '../../services/ApiFilmes'
import { Card, Text } from 'react-native-paper'
import { ScrollView } from 'react-native'

const FilmesPopulares = ({navigation}) => {

    const [filmes,setFilmes] = useState([])

    useEffect(() => {
        ApiFilmes.get('movie/popular?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })
    }, [])

  return (
    <ScrollView>
        {filmes.map(item=>(
            <Card style={{margin:5}} key={item.id} onPress={() => navigation.push('Filmes-Detalhes', { id: item.id })}>
            <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
            <Text>{item.title}</Text>
            <Text>{item.overview}</Text>
            </Card>
        ))}
    </ScrollView>
  )
}

export default FilmesPopulares