module.exports = {
    create: function (context) {
        const code = context.getSourceCode();
        return {
            Program(node) {
                const firstStatement = node.body[0];

                const [firstComment] = code.getCommentsBefore(firstStatement || node);
                if (firstComment?.value?.includes('Copyright')) {
                    return;
                }
                context.report(node, 'Copyright heading is required');
            },
        };
    }
}