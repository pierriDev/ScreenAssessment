module.exports = {
    plugins: [
        [
            "module-resolver",
            {
                root: ["."],
                alias: {
                // This has to be mirrored in tsconfig.json
                "^@mb/(.+)": "./src/\\1",
                },
            },
        ],
    ],
    presets: ['module:@react-native/babel-preset'],
};
