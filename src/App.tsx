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
      <UserCard repos={defaultUser.repos} followers={defaultUser.followers} following={defaultUser.following} />
    </Container>
  );
}

export default App;
