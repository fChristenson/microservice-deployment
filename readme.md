# Deploying MicroServices

## What we will cover

- What is a deployment?
- How to do it without any special tools
- What is a load balancer?
- Why do we need a load balancer?
- Why Docker helps to make it easier
- Why docker-compose helps to make it easier
- Why Kubernetes helps to make it even easier

## Notes

By the end of this series you will know how the following works:

- Recreate deployment, you stop system A and then start system B
- Blue-Green deployment, you run both system A and system B and then roll traffic over to B
- Rolling deployment, you switch system A for system B one service at a time
- Canary deployment, you deploy system B to a small group of users to see if it is safe
- Shadow deployment, you duplicate traffic to system A in to system B to see if it is safe

### Recreate & Blue-Green

We will start by learning the basics, manual deployments without any special tools.

Recreate simply means that we stop the system, make our updates and then start it again.

You may remember the old "down for maintenance" pages.

Blue-Green means that we run version A and then a new version B, then we wait for all traffic to
move over to version B before we remove version A.
