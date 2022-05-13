import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { Button, Subheading, Text, Title } from 'react-native-paper';
import { RootStackParamList } from '../../../App';
import { useAllSneakersFacade } from '../../components/sneakers/sneakers.hooks';
import Container from '../../containers/Container';
import styled from '../../utils/sub-components/Styled';
import { colors, spacing } from '../../utils/theme';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation: { navigate } }: Props) => {
  const [sneakers, error] = useAllSneakersFacade();

  if (error) {
    return (
      <Container>
        <Title
          style={{ textAlign: 'center', fontSize: 21, color: colors.accent }}>
          Error
        </Title>
      </Container>
    );
  }

  return (
    <Container>
      <HomeTitle>Sneakers</HomeTitle>
      <Content>
        <FlatList
          data={sneakers}
          showsVerticalScrollIndicator
          renderItem={({ item }) => (
            <Block>
              <Label>
                {item.name} {item.variant}
              </Label>
              <Brand>{item.brand}</Brand>
              <Description>{item.description}</Description>
              <BlockImage
                source={{
                  uri: item.thumbnail,
                }}
              />
              <ViewBtn
                mode="contained"
                uppercase={false}
                labelStyle={{ fontSize: 16 }}
                onPress={() => {
                  navigate('Sneaker', {
                    id: item.id,
                  });
                }}>
                View
              </ViewBtn>
            </Block>
          )}
        />
      </Content>
    </Container>
  );
};
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
  marginTop: spacing.lg,
  borderRadius: spacing.sm,
});

const BlockImage = styled(Image, {
  height: 200,
  marginTop: spacing.md,
});

const Label = styled(Subheading, {
  fontSize: 18,
  color: colors.primary,
});

const Brand = styled(Text, {
  fontSize: 16,
});

const Description = styled(Text, {
  marginTop: spacing.sm,
});

const ViewBtn = styled(Button, {
  marginTop: spacing.md,
  paddingVertical: spacing.xs,
});

export default Home;
