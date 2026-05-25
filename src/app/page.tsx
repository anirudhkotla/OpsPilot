import { LayoutDashboard, Users, FolderKanban, FileText, Bell, Settings } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          OpsPilot Dashboard Initialized
        </p>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          OpsPilot
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mt-12 gap-4">
        <a
          href="/dashboard"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold flex items-center gap-2`}>
            Dashboard <LayoutDashboard className="w-5 h-5" />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Overview of company metrics and active operations.
          </p>
        </a>

        <a
          href="/employees"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold flex items-center gap-2`}>
            Employees <Users className="w-5 h-5" />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Manage employee directory and profiles.
          </p>
        </a>

        <a
          href="/projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold flex items-center gap-2`}>
            Projects <FolderKanban className="w-5 h-5" />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Track projects, teams, and task workflows.
          </p>
        </a>

        <a
          href="/requests"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold flex items-center gap-2`}>
            Requests <FileText className="w-5 h-5" />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Internal request system and approvals.
          </p>
        </a>
      </div>
    </main>
  );
}