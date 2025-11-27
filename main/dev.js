import { spawn } from 'node:child_process';

const processes = [];

const run = (command, args, name) => {
  const child = spawn(command, args, { stdio: 'inherit', shell: true });
  processes.push(child);
  child.on('close', (code) => {
    if (code !== 0) {
      console.error(`${name} exited with code ${code}`);
      processes.forEach((proc) => proc.kill());
      process.exit(code ?? 1);
    }
  });
};

run('npm', ['--prefix', 'server', 'run', 'dev'], 'API server');
run('npm', ['--prefix', 'client', 'run', 'dev'], 'Vite client');

process.on('SIGINT', () => {
  processes.forEach((proc) => proc.kill());
  process.exit();
});
