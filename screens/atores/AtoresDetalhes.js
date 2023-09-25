import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import ApiFilmes from '../../services/ApiFilmes'
import { Image, ScrollView, View } from 'react-native'

const AtoresDetalhes = ({navigation,route}) => {

    const [ator,SetAtor] = useState({})
    const [filmes,SetFilmes] = useState([])

    useEffect(() => {
        const id = route.params.id
        ApiFilmes.get('person/' + id + '?language=pt-BR').then(resultado => {
            SetAtor(resultado.data)
        })
        ApiFilmes.get('person/' + id + '/movie_credits?language=pt-BR').then(resultado => {
            SetFilmes(resultado.data.cast)
        })
    },[])


  return (
    <ScrollView>
    <Card>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Image source={{ uri: 'http://image.tmdb.org/t/p/w500/' + ator.profile_path }}
          style={{ width: 200, height: 250, borderRadius: 75, marginBottom: 20, marginTop: 10 }} />
      </View>
    </Card>
    <Card style={{margin:5 }}>
    <Text>{ator.id}</Text>
    <Text>{ator.name}</Text>
    <Text>{ator.biography}</Text>
    <Text>{ator.birthday}</Text>
    <Text>{ator.known_for_department}</Text>
    </Card>
    <Text style={{color:'red', textAlign:'center'}} >Filmes</Text>
        {filmes.map(item=>(
             <Card style={{ margin: 5 }} key={item.id}
             onPress={() => navigation.push('Filmes-Detalhes', { id: item.id })}
             >
             <Card.Title
                 title={item.original_title}
                 subtitle={item.release_date}
                 left={(props) => <Avatar.Image size={44} source={{uri:'http://image.tmdb.org/t/p/w500/'+ item.backdrop_path}} />}
                 right={(props) => <IconButton {...props} icon="greater-than"/>}
             />
         </Card>
        ))}
    </ScrollView>
  )
}

export default AtoresDetalhes