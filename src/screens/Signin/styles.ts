import {theme} from './../../global/theme';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-horizontal: 30px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const LogoBaseDoc = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 300px;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const FormContainer = styled.View`
  flex: 2;
`;

export const InputContainer = styled.View`
  padding: 10px;
  height: 40px;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.secondary};
  margin-bottom: 20px;
`;
export const InputLogin = styled.TextInput`
  font-size: 16px;
`;
