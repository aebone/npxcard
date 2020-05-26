'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('         Aline Ebone'),
  title: chalk.white('Frontend Developer'),
  instagram: chalk.gray('https://instagram.com/') + chalk.green('alinebone'),
  github: chalk.gray('https://github.com/') + chalk.green('alinebone'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.green('alinebone'),
  web: chalk.cyan('https://alinebone.github.io'),
  email: chalk.cyan('iniebone@gmail.com'),
  npx: chalk.cyan('npx') + ' ' + chalk.white('alinebone'),
  labelInstagram: chalk.white.bold('   Instagram:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelEmail: chalk.white.bold('      Email:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.title}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const emailing = `${data.labelEmail}  ${data.email}`
const carding = `${data.labelCard}  ${data.npx}`
const instagraming = `${data.labelInstagram}  ${data.instagram}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + // data.labelWeb + data.web
               emailing + newline + // data.labelEmail + data.email
               instagraming + newline + newline + //data.labelInsagram + data.instagram
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
