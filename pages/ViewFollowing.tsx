import { Profiles } from '@lens-protocol/react-native-lens-ui-kit'

const ViewFollowing = ({route, navigation}) => {
    return (
        <Profiles 
            profilesQuery={{
                name: 'getFollowing',
                ethereumAddress: route.params.ethereumAddress
            }}
        />
    )
}

export default ViewFollowing;