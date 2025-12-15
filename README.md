<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="./logo/Hush.png">
        <source media="(prefers-color-scheme: light)" srcset="./logo/Hush.png">
        <img alt="TaskSquad Logo" src="./logo/Hush.png">
    </picture>
</p>

# Hush

Hush is a minimalist, privacy-focused chat application that creates temporary chat rooms which self-destruct after a period of time. All messages are automatically deleted when the room is destroyed, ensuring conversations remain private and don't persist indefinitely.

## Features

- **Ephemeral Messaging**: Rooms automatically self-destruct after a set period
- **Anonymous Chat**: Users are assigned random animal-based pseudonyms
- **Auto Cleanup**: All data is automatically deleted when rooms expire
- **Responsive Design**: Works on mobile and desktop devices

## Getting Started

First, install the dependencies:

```bash
npm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

You'll need to set up Upstash Redis to run the application locally. Create a `.env.local` file with the following variables:

```env
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.
