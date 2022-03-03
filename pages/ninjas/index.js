import Head from 'next/head'
import styles from '../../styles/Ninja.module.css'
import Link from 'next/link'
export const getStaticProps = async () => {

  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

  return {
    props: {
      data
    }
  }
}

const Ninjas = ({data}) => {
  return (<>
    <Head>
      <title>Ninja List | Ninjas</title>
      <meta name="keywords" content="Ninja List"/>
    </Head>
    <div>
        <h1>All ninjas</h1>
        {data.map(user => (
          <Link href={`/ninjas/${user.id}`} key={user.id}>
            <a className={styles.single}><h3>{user.name}</h3></a>
          </Link>

        ))}
    </div>
    </>)
}

export default Ninjas