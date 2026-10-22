# Grey Ridge — MCP Server Security Scanner (Apify Actor)
# Built on the official Apify Node base image (Apify SDK preinstalled).
FROM apify/actor-node:20

# Install dependencies first (better layer caching). The scanner engine is pulled
# from its public MIT package so the Actor's verdicts stay in lockstep with the
# hosted Grey Ridge /scan/mcp engine — one source of truth, no forked rules.
COPY package.json ./
RUN npm install --omit=dev --omit=optional \
    && echo "Installed dependencies:" \
    && (npm ls --omit=dev --all || true)

# Copy the Actor source.
COPY src ./src

CMD ["node", "src/main.js"]
