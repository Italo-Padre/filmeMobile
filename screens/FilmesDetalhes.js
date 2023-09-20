import React, { useEffect, useState } from 'react'
import { Avatar, Card, Text } from 'react-native-paper'
import ApiFilmes from '../services/ApiFilmes'
import { ScrollView, View } from 'react-native'

const FilmesDetalhes = ({ route }) => {

    const id = route.params.id
    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])
    
    useEffect(() => {
        ApiFilmes.get('movie/' + id + '?language=pt-BR').then(resultado => {
            setFilme(resultado.data)
        })
    }, [])

    useEffect(()=>{

        ApiFilmes.get('movie/' + id + '/credits').then(resultado => {
            setAtores(resultado.data.cast)
        })
    },[])

    return (
        <ScrollView>
            <Card style={{ margin: 5 }}>
                <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} />
                <Card.Title title={filme.original_title} />
                <Card.Content>
                    <Text>{filme.overview}</Text>
                </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Text>Orçamento:{filme.revenue}</Text>
                <Text>Voto:{filme.vote_average}</Text>
                <Text>Duração:{filme.runtime}</Text>
                <Text>Lançamento:{filme.release_date}</Text>
            </Card.Content>
            </Card>
            <Text style={{ margin: 5 }}>Atores</Text>

            {atores.map(item=>(
                 <Card style={{ margin: 5 }} key={item.id}>
                 <Card.Title
                     title={item.character}
                     subtitle={item.name}
                     left={(props) => <Avatar.Image size={44} source={'http://image.tmdb.org/t/p/w500/'+ item.profile_path} />}
                 />
             </Card>
                
            ))}

        </ScrollView>
    )
}

export default FilmesDetalhes