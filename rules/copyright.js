module.exports = {
    meta: {
        fixable: "code",
        schema: [
            { type: "string" }
        ]
    },
    create: function (context) {
        const code = context.getSourceCode();
        return {
            Program(node) {
                const firstToken = code.getFirstToken(node, { includeComments: false });

                if (!firstToken) {
                    return;
                }

                const headComments = code.getCommentsBefore(firstToken);
                const hasSomeCopyrightHeader = headComments?.some(comment => comment?.value?.includes('Copyright'));
                if (hasSomeCopyrightHeader) {
                    return;
                }
                const headerTemplate = context.options[0];
                const fix = headerTemplate ? function (fixer) {
                    return fixer.insertTextBefore(firstToken, headerTemplate.replace(/%%CURRENT_YEAR%%/g, new Date().getFullYear()))
                } : undefined;

                context.report({
                    node,
                    message: 'Copyright heading is required',
                    fix
                });
            },
        };
    },
}
