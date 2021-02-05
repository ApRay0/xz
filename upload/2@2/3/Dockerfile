FROM codesignal/js:v8.0.1

# Install TypeScript and testing libraries
RUN npm install -g \
    ts-node \
    typescript \
    @types/node \
    @types/ramda
WORKDIR /app

COPY . /app
RUN ["tsc", "src/Numerical_Differentiation.ts"]
ENTRYPOINT ["node", "src/Numerical_Differentiation.js"]