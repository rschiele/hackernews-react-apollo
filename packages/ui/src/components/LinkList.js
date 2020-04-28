import React from 'react'
import Link from './Link'

const styles = {
  width: '90%',
  height: '90%',
  margin: '0 auto',
  h1: {
    textAlign: 'center'
  }
}

const LinkList = () => {
  const linksToRender = [
    {
      id: '1',
      description: 'Prisma turns your database into a GraphQL API 😎',
      url: 'https://www.prismagraphql.com'
    },
    {
      id: '2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    }
  ]

  return (
    <div className={styles}>
      <h1>This is rendering now </h1>
      <ol>
        <li>
          I added prettier to format this, get the Prettier extension in VSCode and turn on Format on Save in
          preferences.
        </li>
        <li>
          I converted your classes to functional components for everything, read about Hooks, they are WAY better,
          classes suck balls.
        </li>
      </ol>
      <div>
        {linksToRender.map(link => (
          <Link key={link.id} link={link} />
        ))}
      </div>
    </div>
  )
}

export default LinkList
