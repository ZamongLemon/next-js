import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <h1> the HomePage</h1>
      <ul>
        <li>
          <Link replace href='/portfolio'>
            portfolio
          </Link>
        </li>
        <li>
          <Link replace href='/clients'>
            Clients
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
