const environment = () => ({
  environment: String(process.env.NODE_ENV) || 'development',
  port: parseInt(process.env.PORT || '', 10) || 3000,
  database: {
    host: String(process.env.DATABASE_HOST),
    port: parseInt(process.env.DATABASE_PORT || '', 10) || 5432,
  },
});

export default environment;

type EnvironmentType = ReturnType<typeof environment>;
export type { EnvironmentType };
