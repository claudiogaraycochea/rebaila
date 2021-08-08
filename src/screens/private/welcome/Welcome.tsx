import React from 'react';
import { View } from 'react-native';
import { Container, Section, Row, H1, Text, ButtonPlayer } from '../../../ui/ui';
import { Color } from '../../../ui/sources/colors/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/reducers';
import IVideo from '../../../models/video';

export default function Welcome(props: any) { 
  const { navigation } = props;
  const { videos } = useSelector((state:RootState) => state.videoConstructor);

  function handlePlayVideo(videoSrc: string) {
    navigation.navigate('Player', {videoSrc});
  }

  return (
    <Container color={Color.grayDark}>
      {videos.map((video: IVideo)=> (
        <Section key={video.id}>
          <Row>
            <ButtonPlayer
              gender={video.gender}
              thumbnail={video.thumbnail}
              onPress={()=>handlePlayVideo(video.video)}
            />
          </Row>
          <Row>
            <H1 color={Color.green}>{video.title}</H1>
          </Row>
          <Row>
            <Text color={Color.white}>{video.description}</Text>
          </Row>
          <Row>
            <View>
              <Text color={Color.white}>Nivel: </Text>
            </View>
            <View>
              <Text color={Color.green}>{video.tag_level}</Text> 
            </View>
          </Row>
          <Row>
            <View>
              <Text color={Color.white}>Duración: </Text>
            </View>
            <View>
              <Text color={Color.green}>{video.time} min</Text> 
            </View>
          </Row>
        </Section>
      ))}
    </Container>
  );
}
