import { GithubUser } from '~types/Users';

export const isGithubUser = (user: any): user is GithubUser => 'id' in user;
