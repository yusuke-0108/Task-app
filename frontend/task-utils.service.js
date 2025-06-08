angular.module('taskApp')
    .factory('TaskUtilsService', function() {
        return {
            notEmptyFields: notEmptyFields,
            formatDateToUTC: formatDateToUTC,
        }

        /**
         * Returns a list of keys from the task object that are not empty or null.
         * @param {Object} task - The task object to check.
         * @returns {Array} - An array of keys that are not empty or null.
         */
        function notEmptyFields(task) {
            let notEmptyFieldsList = [];
            let FieldNameJA = '';
            Object.keys(task).forEach(key => {
                if (task[key] !== '' && task[key] !== null) {
                    switch (key) {
                        case 'title':
                            FieldNameJA = 'タイトル';
                            break;
                        case 'place':
                            FieldNameJA = '場所';
                            break;
                        case 'due_date':
                            FieldNameJA = '期限';
                            break;
                        case 'detail':
                            FieldNameJA = '詳細';
                            break;
                        case 'due_date':
                            FieldNameJA = '期限';
                            break;
                        case 'completed':
                            FieldNameJA = 'ステータス';
                            break;
                        default:
                            FieldNameJA = '';
                            break;
                    }

                    if (FieldNameJA !== ''){
                        notEmptyFieldsList.push({
                            key: key,
                            label: FieldNameJA,
                            value: task[key]
                        });
                    }
                }
            })
            return notEmptyFieldsList;
        }

        function formatDateToUTC(date) {
            const pad = (n) => (n < 10 ? '0' + n : n);
            return date.getFullYear() + '-' +
                   pad(date.getMonth() + 1) + '-' +
                   pad(date.getDate()) + 'T' +
                   pad(date.getHours()) + ':' +
                   pad(date.getMinutes()) + ':' +
                   pad(date.getSeconds());
        }

    })