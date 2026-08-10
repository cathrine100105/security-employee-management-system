import {
  ShieldCheck,
  Users,
  Building2,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import FloatingBackground from "../ui/background/FloatingBackground";

const AuthHeader = () => {
  return (
    <div className="relative hidden h-screen overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-700 to-purple-800 lg:flex">
      <FloatingBackground />

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-10">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl">
            <ShieldCheck size={30} className="text-indigo-700" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">GuardTrack</h1>

            <p className="text-white/70">Security Employee Management</p>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="absolute left-2 top-8 rounded-2xl bg-white/15 backdrop-blur-xl p-4 shadow-xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-3">
                <Users className="text-indigo-600" size={22} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">250+</h3>

                <p className="text-sm text-white/70">Active Guards</p>
              </div>
            </div>
          </div>

          <div className="absolute right-4 bottom-8 rounded-2xl bg-white/15 backdrop-blur-xl p-4 shadow-xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-3">
                <Building2 className="text-indigo-600" size={22} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">35+</h3>

                <p className="text-sm text-white/70">Clients</p>
              </div>
            </div>
          </div>

          <div className="absolute right-10 top-20 rounded-2xl bg-white/15 backdrop-blur-xl p-4 shadow-xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-3">
                <Clock3 className="text-indigo-600" size={22} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">24/7</h3>

                <p className="text-sm text-white/70">Monitoring</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold leading-tight text-white">
            Securely Manage
            <br />
            Your Security Workforce
          </h2>

          <p className="max-w-lg text-lg leading-8 text-white/75">
            A modern platform to manage employees, attendance, shift allocation,
            client locations and reports from one centralized dashboard.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-5">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 size={18} />
              Employee Records
            </div>

            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 size={18} />
              Shift Scheduling
            </div>

            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 size={18} />
              Client Management
            </div>

            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 size={18} />
              Secure Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
