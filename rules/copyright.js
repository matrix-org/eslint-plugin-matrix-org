const COPYRIGHT_HEADER = `
/*
Copyright %%CURRENT_YEAR%% The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

`
module.exports = {
    meta: {
        fixable: true,
    },
    create: function (context) {
        const code = context.getSourceCode();
        return {
            Program(node) {
                const firstStatement = node.body[0];

                const [firstComment] = code.getCommentsBefore(firstStatement || node);
                if (!firstStatement || firstComment?.value?.includes('Copyright')) {
                    return;
                }
                context.report({
                    node,
                    message: 'Copyright heading is required',
                    fix: function (fixer) {
                        return fixer.insertTextBefore(firstStatement, COPYRIGHT_HEADER.replace(/%%CURRENT_YEAR%%/g, new Date().getFullYear()))
                    }
                });
            },
        };
    },

}