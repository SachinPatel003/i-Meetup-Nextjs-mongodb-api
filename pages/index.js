import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>my meetup app</title>
        <meta name="description" content="the app build by NextJS"></meta>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

// export async function getServerSideProps(context) {
//   req = context.req;
//   res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sachinpatel:vJTH9X0QjK9tBaT3@cluster0.iku7vyp.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("sachinmeetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        id: meetup._id.toString(),
        image: meetup.image,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
