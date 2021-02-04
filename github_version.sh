#!/bin/bash

# we'll write all git versions of the file to this folder:
EXPORT_TO=/tmp/app_details_versions

# ---------------- don't edit below this line --------------

USAGE="Please cd to the root of your git proj and specify path to file you with to inspect (example: $0 some/path/to/file)"

# create folder to store all revisions of the file
if [ ! -d ${EXPORT_TO} ]; then
    echo "creating folder: ${EXPORT_TO}"
    mkdir ${EXPORT_TO}
fi

# Get all apps in app details
APPLICATIONS=`ls public/apps_data/apps_details`

for application in $APPLICATIONS
do
  GIT_PATH_TO_FILE="public/apps_data/apps_details/${application}"

  # check if file exist
  if [ ! -f ${GIT_PATH_TO_FILE} ]; then
      echo "error: File '${GIT_PATH_TO_FILE}' does not exist. ${USAGE}" >&2
      exit 1
  fi

  # extract just a filename from given relative path (will be used in result file names)
  GIT_SHORT_FILENAME=$(basename $GIT_PATH_TO_FILE)

  EXPORT_TO_REVISIONS="${EXPORT_TO}/${application}"

  # create folder to store all revisions of the file
  if [ ! -d ${EXPORT_TO_REVISIONS} ]; then
      echo "creating folder: ${EXPORT_TO_REVISIONS}"
      mkdir ${EXPORT_TO_REVISIONS}
  fi

  # reset coutner
  COUNT=0

  # iterate all revisions
  git rev-list --all --objects -- ${GIT_PATH_TO_FILE} | \
      cut -d ' ' -f1 | \
  while read h; do \
       COUNT=$((COUNT + 1)); \
       COUNT_PRETTY=$(printf "%04d" $COUNT); \
#       SHOW_DATE=`git show $h --date=format:'%Y%m%d%H%M%S' | head -3 | grep 'Date:'`
#       echo "${SHOW_DATE}"
       COMMIT_DATE=`git show $h --date=format:'%Y%m%d%H%M%S' | head -3 | grep 'Date:' | awk '{print $2}'`; \
       if [ "${COMMIT_DATE}" != "" ]; then \
           git cat-file -p ${h}:${GIT_PATH_TO_FILE} > ${EXPORT_TO_REVISIONS}/${COMMIT_DATE}.json;\
       fi;\
  done
done

# return success code
echo "result stored to ${EXPORT_TO}"
exit 0
