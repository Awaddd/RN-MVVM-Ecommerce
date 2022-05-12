import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, View } from 'react-native';
import { Button, Subheading, Text, Title } from 'react-native-paper';
import { RootStackParamList } from '../../../App';
import Container from '../../containers/Container';
import styled from '../../utils/sub-components/Styled';
import { colors, spacing } from '../../utils/theme';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation: { navigate } }: Props) => (
  <Container>
    <HomeTitle>Sneakers</HomeTitle>
    <Content>
      <Block>
        <Label>Air Jordan 4s</Label>
        <Brand>Nike</Brand>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius
          cupiditate ullam sapiente adipisci quaerat sint exercitationem atque
          amet eos?
        </Description>
        <BlockImage
          source={{
            uri: 'https://i.ytimg.com/vi/oo4yyieM63I/maxresdefault.jpg',
          }}
        />
        <ViewBtn
          mode="contained"
          onPress={() => {
            navigate('Sneaker', {
              id: '27b6ad06-ef68-4b1a-9e03-78a948251e34',
            });
          }}>
          View
        </ViewBtn>
      </Block>
    </Content>
  </Container>
);

const HomeTitle = styled(Title, {
  fontSize: 24,
  textAlign: 'center',
  marginVertical: spacing.lg,
  color: colors.primary,
});

const Content = styled(View, {
  flex: 1,
  marginHorizontal: spacing.lg,
});

const Block = styled(View, {
  marginTop: spacing.sm,
  borderRadius: spacing.sm,
});

const BlockImage = styled(Image, {
  height: 200,
  marginTop: spacing.md,
});

const Label = styled(Subheading, {
  fontSize: 18,
  color: colors.accent,
});

const Brand = styled(Text, {
  fontSize: 16,
});

const Description = styled(Text, {
  marginTop: spacing.sm,
});

const ViewBtn = styled(Button, {
  marginTop: spacing.md,
});

export default Home;
