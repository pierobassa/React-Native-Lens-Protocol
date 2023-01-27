import { Feed } from '@lens-protocol/react-native-lens-ui-kit'

const ViewComments = ({route, navigation}) => {
    return (
        <Feed 
            publicationsQuery={{
                name: 'getComments',
                publicationId: route.params.publicationId
            }}
            onProfileImagePress={
                publication => {
                    navigation.push("Profile", {
                        profile: publication.profile
                    })
                }
            }
        />
    )
}

export default ViewComments;