import Link from "next/link";

export default function TopNav() {
  return (
    <div className="sticky top-0 z-50">
      <div className="md:cotainer mx-auto max-w-screen-xl md:m-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" title="AppServices" className="btn btn-ghost text-xl">AppService</Link>
          </div>
          <ul className="flex flex-1">
            <li> <Link href="/tag/Ios" title="Ios app services">Ios</Link> </li>
            <li className="ml-3"> <Link href="/tag/Android" title="Android app services">Android</Link> </li>
          </ul>
          <div className="hidden flex-none gap-2 md:flex">
            {/* <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div> */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <Link className="w-10 rounded-full" href="#">
                  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </Link>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {/* <li> <a className="justify-between"> Github <span className="badge">go</span> </a> </li> */}
                <li> <a 
                href="https://github.com/pickknow/awesome-app-services" target="_blank"
                title="Awesome App services on Github"
                >
                  Awesome AppServices</a></li>
                <li>
                  <a title="open source code of this website" href="https://github.com/pickknow/awesome-app-services-code" target="_blank">
                  Open source code</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
