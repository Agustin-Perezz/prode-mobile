import { StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Redirect, Route, Switch } from 'react-router-native';

import { Home, SignUp } from '@/views';

export const AppRouter = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link to="/signup" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>SignUp</Text>
        </Link>
        <Link to="/login" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Login</Text>
        </Link>
      </View>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/login" exact>
          <Text>Working on it!</Text>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
});
