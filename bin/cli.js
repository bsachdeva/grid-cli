#!/usr/bin/env node
const { program } = require('commander')
const { spawn } = require('child_process')
const path = require('path')

program
  .name('grid')
  .description('CLI for GridSelection assignment')
  .version('1.0.0')

// --- INIT COMMAND ---
program
  .command('init')
  .description('Clone a template Github repository.')
  .argument('[dir]', 'target directory', '.')
  .action((dir) => {
    const repo = 'https://github.com/bsachdeva/grid-component.git'
    const args = ['clone', repo, dir]

    const git = spawn('git', args, { stdio: 'inherit' })

    git.on('close', (code) => {
      if (code === 0) {
        console.log(`Repo cloned into ${dir}`)
      } else {
        console.error(`git clone failed with code ${code}`)
        process.exit(1)
      }
    });
  });

// --- CREATE COMMAND ---
program
  .command('create [x] [y]')
  .description('Generates a new component with X and Y arguments.')
  .action((x, y) => {
    const cols = parseInt(x, 10) || 16
    const rows = parseInt(y, 10) || 8

    console.log(`Generating Component with ${cols} x ${rows}`)

    console.log('Starting Parcel server...')
    try {
      spawn('npx parcel index.html', {
        stdio: 'inherit',
        shell: true,
        env: {
          ...process.env,
          COLS: cols,
          ROWS: rows
        }
      })
    } catch (err) {
      console.error('Failed to start Parcel:', err.message)
    }
  })

program.parse(process.argv)
