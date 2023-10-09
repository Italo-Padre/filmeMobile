import React, { useEffect, useState } from 'react'
import ApiFilmes from '../../services/ApiFilmes'
import { ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'

const Atores = () => {

    const [atores, setAtores] = useState([])

    useEffect(() => {
        ApiFilmes.get('person/popular').then(resultado => {
            setAtores(resultado.data.results)
        })
    }, [])

    return (
        <ScrollView>
            {atores.map(item => (
                <Card style={{ margin: 5 }} key={item.id}>
                    <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/w500/' + item.profile_path }} />
                    <Text style={{margin:5}}>{item.name}</Text>
                </Card>
            ))}
        </ScrollView>
    )
}

export default Atores