/**
 * @param {Command} command
 * @param {Target} target
 * @param {Member} member
 */
 module.exports = (command, target, member) => {
    if (command.validate.self && target.id === member.id)
        return `⛔ You cannot use this command on yourself.`;
    if (command.validate.superior && target.roles.highest.position >= member.roles.highest.position && target.id !== member.id)
        return `⛔ You cannot use this command on someone with an equal or higher role than you.`;
    if (command.validate.permcheck && target.permissions.has(command.permission) && target.roles.highest.position >= member.roles.highest.position && target.id !== member.id )
        return `⛔ You cannot use this command on someone that has the ${command.permission} permission`;

    return false;
}
