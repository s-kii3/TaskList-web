import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>タスク管理アプリケーション By React</h1>
      <Link href="/todo">
        アプリを使う
      </Link>
    </>
  );
}
