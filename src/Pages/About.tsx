const About = () => {
  return (
    <div className="w-screen min-h-screen overflow-scroll px-28 pt-28 pb-0 flex flex-col text-white">
      <div className="w-full flex flex-col items-center gap-8">
        <h1 className="text-7xl font-extrabold uppercase">
          Welcome to Silkywriters
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-normal tracking-widest max-w-5xl leading-10">
          We are <strong>Silkywriters</strong>, a writing agency built to make
          your ideas shine. Academic writing was our first love (and we’re still
          very good at it), but we’ve since expanded into everything from brand
          copy to web content(and yes, we’ve grown, because our clients needed
          more. we are that good). If you’re here, you probably already
          understand the value of strong, clear writing. That’s smart. The even
          smarter move? You found us. Writing is what we do, and we do it
          exceptionally well. True story.
        </p>
      </div>
    </div>
  );
};

export default About;
