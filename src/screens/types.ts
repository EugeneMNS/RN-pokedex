import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    EntranceScreen: undefined;
    Home: undefined;
    Details: {
        url?: string;
        name?: string;
        id: number;
        types?: string[];
    };
}

export type DetailsPropsType = NativeStackScreenProps<RootStackParamList, 'Details'>;

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()
