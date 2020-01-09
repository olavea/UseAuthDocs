import React from 'react'
import { navigate } from 'gatsby'
import { Button, Box, Heading } from 'rebass'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import theme from '../utils/theme'
import { rhythm } from '../utils/typography'

const Header = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.lightgray};
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header>
            <Box display="flex" mt={4}>
              <Heading fontSize={[6, 7]}>
                React app authentication added
              </Heading>
              <Heading fontWeight={400}>
                You lean back and useAuth handles users, login forms, redirects,
                sharing state between components. Everything.
              </Heading>
            </Box>
            <Box display="flex" mt={4}>
              <Button variant="primary" onClick={() => navigate('/docs')}>
                GET STARTED
              </Button>
            </Box>
          </Header>
          <Container>
            <main>
              <Box display="flex" mt={4}>
                <Heading fontWeight={400}>Enjoy useAuth</Heading>
                <Heading fontWeight={400}>
                  You can even say hello to your users
                </Heading>
                <p>...</p>
              </Box>
              <Box display="flex" mt={4}>
                <Button
                  ml={2}
                  variant="primary"
                  onClick={() => navigate('/docs')}
                >
                  Getting Started
                </Button>
              </Box>
            </main>
            <hr
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1),
              }}
            />
            <Box as="footer" mb={4}>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Box>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default Layout
