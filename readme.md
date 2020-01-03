# Deploying MicroServices

## What we will cover

- What is a deployment?
- Why Docker helps to make it easier
- Why Kubernetes helps to make it even easier

## Notes

We will talk about the following deployment types:

- Recreate deployment, you stop system A and then start system B
- Blue-Green deployment, you run both system A and system B and then roll traffic over to B
- Rolling deployment, you switch system A for system B one service at a time

### Recreate & Blue-Green

We will start by learning the basics, manual deployments without any special tools.

Recreate simply means that we stop the system, make our updates and then start it again.

You may remember the old "down for maintenance" pages.

Blue-Green means that we run version A and then a new version B, then we wait for all traffic to
move over to version B before we remove version A.

### Rollover

A rollover release is when we have distributed system and we switch out each service as soon as
it is ready instead of as in a Blue-Green release where we wait for all services to be up and running
before we make the switch.
