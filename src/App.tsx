import axios from 'axios';
import { useCallback, useState } from 'react';

import Container from '~components/Container';
import Search from '~components/Search';
import TheHeader from '~components/TheHeader';
import UserCard from '~components/UserCard';
import { extractLocalUser } from '~utils/exractLocalUser';
import { isGithubUser } from '~utils/typeguards';

import { defaultUser } from './mock';
import { GithubError, GithubUser, LocalGithubUser } from './types';

const BASE_URL = 'https://api.github.com/users/';
function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  async function fetchUser(username: string) {
    const url = `${BASE_URL}${username}`;
    try {
      const response = await axios.get(url);
      const data = response.data as GithubUser | GithubError;

      if (isGithubUser(data)) {
        setUser(extractLocalUser(data));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  }

  const handleSubmit = useCallback((username: string) => {
    void fetchUser(username);
  }, []);

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={handleSubmit} />
      {user && (
        <UserCard
          repos={user.repos}
          followers={user.followers}
          following={user.following}
          login={user.login}
          created={user.created}
          name={user.name}
          avatar={user.avatar}
          bio={user.bio}
          blog={user.blog}
          company={user.company}
          location={user.location}
          id={user.id}
          twitter={user.twitter}
        />
      )}
    </Container>
  );
}

export default App;
