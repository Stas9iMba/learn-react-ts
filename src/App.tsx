import Container from '~components/Container';
import Search from '~components/Search';
import TheHeader from '~components/TheHeader';
import UserCard from '~components/UserCard';

import { defaultUser } from './mock';

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmit={() => {}} />
      <UserCard
        repos={defaultUser.repos}
        followers={defaultUser.followers}
        following={defaultUser.following}
        login={defaultUser.login}
        created={defaultUser.created}
        name={defaultUser.name}
        avatar={defaultUser.avatar}
        // bio={defaultUser.bio}
        blog={defaultUser.blog}
        company={defaultUser.company}
        location={defaultUser.location}
        id={defaultUser.id}
        twitter={defaultUser.twitter}
      />
    </Container>
  );
}

export default App;
