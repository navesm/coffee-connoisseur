import Link from 'next/link';

const Next = () => {
  return (
    <div>
      Welcome to Next.js with Ankita
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Next;