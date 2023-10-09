import React, { useEffect, useState } from 'react'
import ApiFilmes from '../../services/ApiFilmes'
import { ScrollView } from 'react-native-web'
import { Card, Text } from 'react-native-paper'

const Series = () => {

    const [series, setSeries] = useState([])

    useEffect(()=>{
        ApiFilmes.get('/tv/popular?language=pt-BR').then(resultado=>{
            setSeries(resultado.data.results)
        })
    }, [])

  return (
    <>
        <ScrollView>
        {series.map(item=>(
            <Card style={{margin:5}} key={item.id}>
            <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
            <Text>{item.title}</Text>
            <Text>{item.overview}</Text>
            </Card>
        ))}
    </ScrollView>
    </>
  )
}

export default Series