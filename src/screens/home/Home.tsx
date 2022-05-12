import React from 'react';
import { View, Image, FlatList } from 'react-native';
import Container from '../../containers/Container';
import styled from '../../components/sub-components/Styled';
import {
  IconButton,
  Title,
  Text,
  Subheading,
  Button,
} from 'react-native-paper';
import { colors, spacing } from '../../utils/theme';
import Carousel from 'react-native-snap-carousel';
import Icon from '../../components/sub-components/Icon';

const images = [
  'https://i.ytimg.com/vi/oo4yyieM63I/maxresdefault.jpg',
  'https://www.allaboutanthony.com/wp-content/uploads/2020/10/Air-Jordan-4-Fire-Red-2020-WDYWT-On-Feet.jpg',
  'https://www.lacesout.net/wp-content/uploads/2016/05/air-jordan4-on-feet.jpg',
];

const renderItem = ({ item }: any) => (
  <View>
    <Image source={{ uri: item }} style={{ width: '100%', height: '100%' }} />
  </View>
);

const sizes = [
  {
    size: 6,
    selected: true,
  },
  {
    size: 7,
    noStock: true,
  },
  {
    size: 8,
  },
  {
    size: 9,
  },
  {
    size: 10,
  },
  {
    size: 11,
  },
  {
    size: 12,
  },
];

const Home = () => (
  <Container>
    <HomeContainer>
      <ProductImageContainer>
        <ActionBarContainer>
          <ActionBar>
            <CircleIconButton>
              <IconButton icon="arrow-left" color={colors.black} />
            </CircleIconButton>
            <CircleIconButton>
              <IconButton icon="heart" color={colors.accent} />
            </CircleIconButton>
          </ActionBar>
        </ActionBarContainer>
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={400}
          itemWidth={400}
          autoplay
          enableMomentum={false}
          lockScrollWhileSnapping={true}
          loop
          autoplayInterval={10000}
        />
      </ProductImageContainer>
      <ProductInfoContainer>
        <ProductInfoContentContainer>
          <ProductInfoContent>
            <ProductInfoTitle>Air Jordan 4s</ProductInfoTitle>
            <ProductInfoSubtitle>Fire Red</ProductInfoSubtitle>
          </ProductInfoContent>
          <ProductInfoAside>
            <ProductInfoPrice>£470</ProductInfoPrice>
          </ProductInfoAside>
        </ProductInfoContentContainer>

        <ProductSizeContainer>
          <ProductSizeSubtitle>Size</ProductSizeSubtitle>
          <FlatList
            data={sizes}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <>
                {item.selected ? (
                  <ProductSizeContent
                    style={{ backgroundColor: colors.primary }}
                    key={index}>
                    <ProductSize style={{ color: colors.white }}>
                      {item.size}
                    </ProductSize>
                  </ProductSizeContent>
                ) : (
                  <ProductSizeContent key={index}>
                    <ProductSize>{item.size}</ProductSize>
                  </ProductSizeContent>
                )}
              </>
            )}
          />
        </ProductSizeContainer>
        <Divider />
        <ProductInfo>
          <ProductInfoHeader>
            <ProductInfoSubheader>Description</ProductInfoSubheader>
            <ProductInfoRatingContainer>
              <Icon name="star" color={colors.yellow} />
              <ProductInfoRating>4,8</ProductInfoRating>
            </ProductInfoRatingContainer>
          </ProductInfoHeader>
        </ProductInfo>
        <ProductInfoParagraph>
          A shoe product that is the latest release with a contemporary design
          that refers to the style of young people's clothing with a
          contemporary style that uses leading materials and designs
        </ProductInfoParagraph>
        <CTA mode="contained" uppercase={false} labelStyle={{ fontSize: 18 }}>
          Shop Now
        </CTA>
      </ProductInfoContainer>
    </HomeContainer>
  </Container>
);

const HomeContainer = styled(View, {
  flex: 1,
});

const ProductImageContainer = styled(View, {
  flex: 1,
});

const ActionBarContainer = styled(View, {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  elevation: 1,
  width: '100%',
});

const ActionBar = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginHorizontal: spacing.lg,
  marginVertical: spacing.lg,
});

const CircleIconButton = styled(View, {
  backgroundColor: colors.white,
  borderRadius: spacing.xl,
});

const ProductInfoContainer = styled(View, {
  flex: 1,
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  backgroundColor: colors.white,
  marginTop: -spacing.lg,
  paddingHorizontal: spacing.xl,
  paddingVertical: spacing.rl,
});

const ProductInfoContentContainer = styled(View, {
  flexDirection: 'row',
});

const ProductInfoContent = styled(View, {
  flex: 2,
});

const ProductInfoAside = styled(View, {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'flex-end',
});

const ProductInfoPrice = styled(Text, {
  color: colors.black,
  fontSize: 27,
  fontWeight: '700',
});

const ProductInfoTitle = styled(Title, {
  fontSize: 24,
  fontWeight: '700',
});

const ProductInfoSubtitle = styled(Text, {
  fontSize: 16,
  fontWeight: '500',
  color: colors.gray2,
});

const ProductSizeContainer = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: spacing.lg,
});

const ProductSizeSubtitle = styled(Text, {
  fontSize: 18,
  color: colors.dark,
  marginRight: spacing.lg,
});

const ProductSizeContent = styled(View, {
  marginLeft: spacing.xs,
  paddingVertical: spacing.sm,
  paddingHorizontal: 18,
  borderRadius: spacing.sm,
});

const ProductSize = styled(Text, {
  fontSize: 18,
});

const Divider = styled(View, {
  height: 1,
  width: '100%',
  backgroundColor: colors.light,
  marginTop: spacing.md,
});

const ProductInfo = styled(View, {
  marginTop: spacing.md,
});

const ProductInfoHeader = styled(View, {
  width: '100%',
  flexDirection: 'row',
});

const ProductInfoSubheader = styled(Subheading, {
  fontSize: 18,
  fontWeight: '500',
  color: colors.black,
});

const ProductInfoRatingContainer = styled(View, {
  backgroundColor: colors.gray,
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 'auto',
  paddingHorizontal: 10,
  paddingVertical: spacing.xs,
  borderRadius: 10,
});

const ProductInfoRating = styled(Text, {
  marginLeft: spacing.sm,
  fontSize: 14,
});

const ProductInfoParagraph = styled(Text, {
  color: colors.gray2,
  fontSize: 16,
  marginTop: spacing.md,
});

const CTA = styled(Button, {
  marginTop: spacing.rl,
  paddingVertical: spacing.sm,
});

export default Home;
